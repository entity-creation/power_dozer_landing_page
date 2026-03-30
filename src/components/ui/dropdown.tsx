import { Link } from "react-router-dom";

type Item = {
  name: string;
  path: string;
  icon: React.ElementType;
};

type Props = {
  title: string;
  items: Item[];
};

const Dropdown = ({ title, items }: Props) => {
  return (
    <div className="relative group">
      <button className="px-4 py-2 text-white hover:text-yellow-400">
        {title}
      </button>

      <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
            >
              <Icon className="text-gray-600" />
              <span className="text-gray-700">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;