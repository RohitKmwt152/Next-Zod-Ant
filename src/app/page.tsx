"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const ScanIDActionButtons = ({
  onScan,
  onSelect,
}: {
  onScan: () => void;
  onSelect: () => void;
}) => (
  <div className="flex gap-4">
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
      onClick={onScan}
    >
      Scan
    </button>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
      onClick={onSelect}
    >
      Select
    </button>
  </div>
);

const ScanID = () => (
  <div className="flex flex-col items-center justify-between w-full max-w-2xl mx-auto px-4 h-full">
    <div className="flex flex-col items-center gap-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Please scan or select ID
      </h2>
      <ScanIDActionButtons onScan={() => {}} onSelect={() => {}} />
    </div>

    <div className="w-full flex justify-center mb-8">
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
        I don&apos;t have ID
      </button>
    </div>
  </div>
);

export default function HomePage() {
  return (
    // old one
    //   <div className="flex flex-col items-center justify-center h-screen">
    //      <Header />
    //      <HomeComponent />
    //      <FooterTabs/>
    //  </div>

    // With dynamic height
    //   <div className="h-[100dvh] bg-gray-50 overflow-hidden">
    //   <Header />
    //     <main
    //       id="main-content"
    //       role="main"
    //       className="flex flex-col justify-between h-[calc(100dvh-4rem-5rem)] mt-[4rem]"
    //     >
    //       <ScanID />
    //   </main>

    //   <Footer />
    // </div>

    // with margin
    <div className="h-[100dvh] flex flex-col bg-gray-50">
      {/* Fixed Header */}
      <Header />

      {/* Scrollable Middle Section */}
      <main
        id="main-content"
        role="main"
        className="flex-1 overflow-y-auto mt-16 mb-20"
      >
        <ScanID />
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}
