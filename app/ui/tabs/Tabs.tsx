'use client'
import { useState } from 'react';

interface Tab {
  id: number;
  name: string;
  content:  React.ReactNode;
}


const TabContent1 = () => (
  <>
    <h2>Title 1</h2>
    <p>Content 1</p>
  </>
);
const TabContent2 = () => (
  <>
    <h2>Title 2</h2>
    <p>Content 2</p>
  </>
);
const TabContent3 = () => (
  <>
    <h2>Title 3</h2>
    <p>Content 3</p>
  </>
);

const Tabs = () => {
  const tabs: Tab[] = [
    {
      id: 1,
      name: 'Experience',
      content: <TabContent1 />
    },
    {
      id: 2,
      name: 'Education',
      content: <TabContent2 />
    },
    {
      id: 3,
      name: 'Settings',
      content: <TabContent3 />
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    console.log(activeTab);
  };


  return (
    <>
      <div className="flex items-center h-[190px]">
        <div className="border-2 border-gray-200 dark:border-gray-500 h-full  ">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center flex-col justify-center h-full " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            {tabs.map((tab: Tab) => (
              <li key={tab.id}
                className={` text-gray-500 dark:text-gray-400 ${tab.id === activeTab.id ? 'text-[#00a388] dark:text-[#00a388] bg-white dark:bg-gray-800' : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'}`}
                role="presentation">
                <button onClick={() => handleTabClick(tab)} className={`inline-block p-4  rounded-t-lg w-full `} id={`${tab.name.toLowerCase()}-tab`} data-tabs-target={`#${tab.name.toLowerCase()}`} type="button" role="tab" aria-controls={tab.name.toLowerCase()} aria-selected="false">
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="default-tab-content" className="w-full h-full">
          <div key={activeTab.id} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 h-full" id={activeTab.name.toLowerCase()} role="tabpanel" aria-labelledby={`${activeTab.name.toLowerCase()}-tab`}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {activeTab.content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
