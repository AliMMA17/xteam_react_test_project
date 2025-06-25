// components/TabNav.js
export default function TabNav({ activeTab, setActiveTab }) {
  const tabs = ["Today", "Tomorrow", "Next 7 Days"];

  return (
    <div className="flex space-x-6 px-6 pt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            text-lg font-semibold px-2
            ${activeTab === tab
              ? "text-white"
              : "text-gray-500 hover:text-gray-300"}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
