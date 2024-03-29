import { Footer } from "../../components/footer";
import { HomeCarousel } from "./carousel";
import { ExploreMore } from "./expolre-more";
import { Recommendations } from "./recommendations";

import "./style.css";
import { TopSelections } from "./top-selections";

export function HomePage() {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Recommendations />
            <TopSelections />
            <ExploreMore />
            <Footer />
        </div>
    );
}
