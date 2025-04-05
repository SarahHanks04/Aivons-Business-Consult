import { CircleCheckBig } from "lucide-react";

export default function TabContent({ activeTab }) {
  if (activeTab === "Business Growth") {
    return (
      <div className="container bg-white w-full mx-auto px-4 pt-8 md:pt-[7rem] pb-6 md:pb-[4rem] flex flex-col md:flex-row gap-6">
        {/* Features List */}
        <div className="md:w-1/2 flex flex-col gap-4 pl-4 md:pl-[4rem]">
          {/* Highest Success Rates */}
          <div className="flex items-start pt-6">
            <div className="flex items-center text-gray-700 p-4 md:p-4">
              <CircleCheckBig
                className="text-blue p-1 bg-[#EBF1FF]"
                size={24}
              />
            </div>
            <div className="pt-3">
              <h4 className="text-lg font-semibold text-[#0F0D1D]">
                Highest Success Rates
              </h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum nibh vel velit auctor aliquet. Aenean <br />{" "}
                sollicitudin, lorem quis bibendum auctor, nisi <br /> elit
                consequat ipsum, nec sagittis sem nibh <br /> id elit.
              </p>
            </div>
          </div>

          {/* We Build Experience */}
          <div className="flex items-start">
            <div className="flex items-center text-gray-700 p-4 md:p-4">
              <CircleCheckBig
                className="text-blue p-1 bg-[#EBF1FF]"
                size={24}
              />
            </div>
            <div className="pt-3">
              <h4 className="text-lg font-semibold text-[#0F0D1D]">
                We Build Experience
              </h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum nibh vel velit auctor aliquet. Aenean <br />{" "}
                sollicitudin, lorem quis bibendum auctor, nisi <br /> elit
                consequat ipsum, nec sagittis sem nibh <br /> id elit.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px md:w-px md:h-[255px] bg-gray-300 mx-4 my-4 md:my-0"></div>

        {/* Additional Information */}
        <div className="md:w-1/2 flex flex-col gap-4 pt-8 pl-4 md:pl-6">
          <p className="text-sm text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look believable.
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            {[
              "If you are going to use a passage",
              "Lorem ipsum you need to be sure",
              "Hidden in the middle of text",
            ].map((item, index) => (
              <li key={index} className="relative pl-4">
                <span className="absolute left-0 text-gray-600">-</span>
                <span className="ml-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Placeholder content for empty tabs
  return (
    <div className="container mx-auto px-4 py-[6rem] text-center">
      <p className="text-gray-600">
        Content for {activeTab} tab coming soon...
      </p>
    </div>
  );
}
