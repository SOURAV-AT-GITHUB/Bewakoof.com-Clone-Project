import cover from "/notfound-cover.svg";
import { useLocation } from "react-router-dom";
export default function NotFound() {
  const location = useLocation()
  console.log(location)
  return (
    <section>
      <div className="flex flex-col items-center gap-3">
        <img src={cover} alt="404" className="" />
        <p className="text-2xl font-medium">OH SNAP !</p>
        <p className="text-xl">The Page you are looking for doesn't exist.</p>
      </div>
    </section>
  );
}
