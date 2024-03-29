import PriceBoard from "./priceBoard";
import ScheduleBoard from "./scheduleBoard";

const dashboard = () => {
  return (
    <>
        <div className="flex-1 bg-[#E1ECEB] p-8">
            {/* Dashboard content */}
            <div className="flex justify-center items-center">
              <div className="w-full space-y-6">
              <div className="bg-white rounded-3xl p-8 space-y-8">
                  <div className="flex space-x-8">
                    <div className="w-full bg-[#E1ECEB] rounded-full p-4">HHGJJGJGJ</div>
                    <div className="w-full bg-[#E1ECEB] rounded-full p-4">YYYRYRURRU</div>
                    <div className="w-full bg-[#E1ECEB] rounded-full p-4">TRTRRFFJFJF</div>
                  </div>
                  <div className="flex space-x-8">
                    <div className="w-full bg-[#E1ECEB] rounded-full p-4">HHGJJGJGJ</div>
                    <div className="w-full bg-[#E1ECEB] rounded-full p-4">YYYRYRURRU</div>
                    <div className="w-full bg-[#E1ECEB] rounded-full p-4">TRTRRFFJFJF</div>
                  </div>
              </div>
              <div className="w-full flex justify-between text-center">
                <div>
                  <h4 className="p-4">RESULT(25)</h4>
                </div>
                <div className="flex space-x-4">
                    <div className="w-full bg-white rounded-full p-4">YYYRYRURRU</div>
                    <div className="w-full bg-white rounded-full p-4">TRTRRFFJFJF</div>
                </div>
              </div>
              <div className="flex space-x-6">
                <div className="w-2/3 bg-white rounded-3xl">
                  <ScheduleBoard />
                </div>
                <div className="w-1/3 relative rounded-3xl overflow-hidden">
                  <PriceBoard />
                </div>
              </div>
              </div>
            </div>
        </div>
    </>

  )
}

export default dashboard
