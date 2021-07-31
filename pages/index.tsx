import { AppLayout } from "components/app-layout";
import { PlacesList } from "components/places-list";
import { SearchBox } from "components/search";
import dynamic from "next/dynamic";

const PlacesMap = dynamic(() => import("components/places-map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export default function Index() {
  return (
    <AppLayout sideComponent={<PlacesList />}>
      <SearchBox />
      <PlacesMap />
    </AppLayout>
  );
}
