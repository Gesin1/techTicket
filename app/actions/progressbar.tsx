"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps?: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps = 3,
}: ProgressBarProps) {
  const stepLabels = ["Ticket Section", "Attendance Details", "Ready"];

  return (
    <div className="w-full px-4 sm:px-0 ">
      {/* Top Labels */}
      <div className="max-w-2xl mx-auto mb-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[32px] font-normal text-colorBackground-foreground">
              {stepLabels[currentStep - 1]}
            </h3>
          </div>
          <h4 className="text-[16px] font-normal text-colorBackground-foreground">
            {currentStep}/{totalSteps}
          </h4>
        </div>
      </div>

      {/* Progress container */}
      <div className="h-2 bg-colorBackground-primary rounded-full overflow-hidden">
        {/* Progress line */}
        <div
          className="h-full bg-colorBackground-hover  transition-all duration-300 rounded-full"
          style={{
            width: `${(currentStep / totalSteps) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
