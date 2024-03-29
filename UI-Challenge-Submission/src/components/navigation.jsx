import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import icon5 from '../assets/icon5.svg';
import icon6 from '../assets/icon6.svg';


const navigation = () => {
      // Array of navigation items
  const navigationItems = [
    { icon: icon1, title: "Brand Name 1", href: "#" },
    { icon: icon2, title: "Brand Name 2", href: "#" },
    { icon: icon3, title: "Brand Name 3", href: "#" },
    { icon: icon4, title: "Brand Name 4", href: "#" },
    { icon: icon5, title: "Brand Name 5", href: "#" },
    { icon: icon6, title: "Brand Name 6", href: "#" },
    // Add more items as needed
  ];

  return (
    <div className="text-white">
      {/* Sidebar content */}
      <div className="navigation">
        <ul>
          {navigationItems.map((item, index) => (
            <li key={index} className="flex items-center mb-4">
              <a href={item.href} className="flex items-center">
                <img src={item.icon} alt={`Icon ${index + 1}`} className="w-6 h-6 mr-8 filter invert" />
                <span className="title">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default navigation;
