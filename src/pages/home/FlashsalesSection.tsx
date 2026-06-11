import { useEffect, useState } from "react";
import PrimaryButton from "../../base/button/ButtonPrimary";
import type { HomePageProps } from "../../interfaces/domain/home";
import ProductCard from "../../shared/ui/cards/ProductCard";
import Clock from "../../shared/ui/time/Clock";
import { FlashSales } from "../../utils/translations/homepage/flashSales";
import Heading from "./Heading";

function FlashSalesSection({ products, state, toggleWishlist }: HomePageProps) {
    if (!products || !state) return null;
    const t = FlashSales[state.lang as keyof typeof FlashSales];
    const isAdmin = state.user?.isAdmin;
    const [timerValues, setTimerValues] = useState({
      days: "03",
      hours: "23",
      minutes: "19",
      seconds: "56",
    });
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
      if (!timerActive) return undefined;

      const interval = window.setInterval(() => {
        setTimerValues((prev) => {
          const totalSeconds =
            Number(prev.days) * 86400 +
            Number(prev.hours) * 3600 +
            Number(prev.minutes) * 60 +
            Number(prev.seconds);

          if (totalSeconds <= 1) {
            setTimerActive(false);
            return {
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00",
            };
          }

          const nextSeconds = totalSeconds - 1;
          return {
            days: String(Math.floor(nextSeconds / 86400)).padStart(2, "0"),
            hours: String(Math.floor((nextSeconds % 86400) / 3600)).padStart(2, "0"),
            minutes: String(Math.floor((nextSeconds % 3600) / 60)).padStart(2, "0"),
            seconds: String(nextSeconds % 60).padStart(2, "0"),
          };
        });
      }, 1000);

      return () => window.clearInterval(interval);
    }, [timerActive]);

    const handleStartTimer = () => {
      setTimerValues({ days: "03", hours: "23", minutes: "19", seconds: "56" });
      setTimerActive(true);
    };
  return (
    <section className="flex flex-col gap-6">
      <Heading textContent={t.today} subTitle={t.FlashSale}>
        <Clock
          ClockType="primary"
          clockValues={timerValues}
          isAdmin={isAdmin}
          timerActive={timerActive}
          onStart={handleStartTimer}
        />
      </Heading>

      <div className="mt-2 flex justify-around">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard
            key={product.id ?? index}
            product={product}
            isFavorite={state.wishlist.includes(product.id)}
            onToggleFavorite={() => toggleWishlist?.(product.id)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-15">
        <PrimaryButton className="w-fit">
          {t.viewAllProducts}
        </PrimaryButton>
      </div>
    </section>
  );
}

export default FlashSalesSection