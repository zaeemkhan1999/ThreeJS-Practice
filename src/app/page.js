import ThreeScene from "@/components/extendedscene";
import SolarSystem from "@/components/solarsystem";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      {/* <ThreeScene /> */}
      <SolarSystem />
    </div>
  );
}
