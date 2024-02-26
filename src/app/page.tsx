// COMPONENTS
import HosptialsGrid from "@/components/hospitals-grid";
import Nav from "@/components/nav";

// AUTH.JS
import { auth } from "@/auth";

// FIRESTORE DATABASE
import { db } from "@/lib/firebase/firebase";
import { getDocs, collection, DocumentData } from "firebase/firestore";

// FIRESTORE STORAGE
import { storage } from "@/lib/firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";

// FAKE DATA
// import { hospitalsData, HospitalData } from "@/lib/fakeData";

// UTILITY FUNCTIONS
import { nameToId } from "@/utils/utilFunctions";

export default async function Home() {
  const hospitalDataSnap = await getDocs(collection(db, "hospital-cards"));
  const hospitalsData: DocumentData = [];
  hospitalDataSnap.forEach((hospitalData) => {
    hospitalsData.push(hospitalData.data());
  });

  const hospitalsDataWithImages = await Promise.all(
    hospitalsData.map(async (hospitalData: DocumentData) => {
      const hospitalImageRef = ref(
        storage,
        `/${nameToId(hospitalData.name)}-${hospitalData.pincode}-${
          hospitalData.id
        }.webp`
      );
      const imageSrc = await getDownloadURL(hospitalImageRef);
      return {
        ...hospitalData,
        imageSrc,
      };
    })
  );

  const session = await auth();
  const isSignedIn = !!session?.user;

  return (
    <div className="">
      <Nav isSignedIn={isSignedIn} />
      <main className="mt-6">
        <HosptialsGrid hospitalsData={hospitalsDataWithImages} />
      </main>
    </div>
  );
}
