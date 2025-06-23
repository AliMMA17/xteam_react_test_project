// components/TabNav.js
export default function TabNav({ activeTab, setActiveTab }) {
  const tabs = ["Today", "Tomorrow", "Next 7 Days"];

  return (
    <div className="flex space-x-4 text-white px-6 pt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm font-medium px-2 pb-1 border-b-2 ${activeTab === tab ? "border-blue-400 text-blue-400" : "border-transparent"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
