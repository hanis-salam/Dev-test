import Community from "@/components/Community";
import Footer from "@/components/Footer";
import MiddleMenu from "@/components/MiddleMenu";
import PromotionNews from "@/components/PromotionNews";
import Related from "@/components/Related";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <main className="bg-slate-200">
      {/* top big promo section */}
      <TopBanner />

      {/* middle menu */}
      <MiddleMenu />

      {/* promotion & news */}
      <PromotionNews />

      {/* Community Section */}
      <Community />

      {/* Related Links section */}
      <Related />

      {/* footer */}
      <Footer />
    </main>
  );
}
