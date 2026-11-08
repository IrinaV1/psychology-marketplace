
import Header from "@/components/Header/Header";
import css from "./Home.module.css";
import AuthNavigation from "@/components/Header/AuthNavigation/AuthNavigation";

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <Header />
      </main>
    </div>
  );
}
