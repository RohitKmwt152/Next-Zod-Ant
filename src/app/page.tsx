import HomeComponent from '@/components/home';
import Header from '@/components/layout/header';
import FooterTabs from '@/components/layout/footer';

export default function Home() {
  return (
     <div className="flex flex-col items-center justify-center h-screen">
     <Header />
     <HomeComponent />
     <FooterTabs/>
 </div>
  );
}
