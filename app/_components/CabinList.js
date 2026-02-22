import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { Filter } from "../_utils/FilterCabins";

export default async function CabinList({ filter }) {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  const displayedCabins = Filter({ cabins, filter });

  return (
    <>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
}
