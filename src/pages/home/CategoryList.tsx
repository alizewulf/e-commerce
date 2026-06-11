import { Link } from "react-router-dom";
import ArrowSVG from "../../shared/ui/icons/Arrow";
import { TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";

type Props = {
  categories: [string, number][];
};

function CategoryList({ categories }: Props) {
  return (
    <ul className="flex flex-col gap-4">
      {categories.map(([category], index) => (
        <li
          key={category}
          className={`${TITLE_TEXT_STYLES.md} capitalize relative group`}
        >
          <Link
            to={`/category/${encodeURIComponent(category.toLowerCase())}`}
            className="flex items-center gap-2 w-full"
          >
            <span>{category}</span>

            {index < 2 && (
              <ArrowSVG fill="black" className="w-4 h-4 -rotate-90" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList