export type AttributionProps = {
  source: string;
  attribution: React.ReactNode;
};

export type AttributionsProps = {
  attributions: AttributionProps[]
}

const Attributions: React.FC<AttributionsProps> = ({attributions}) => {
  return (
    <div className="border border-solid border-black p-2 border-[0.5px]">
      <h2 className="text-md mb-1">Credits & Attributions</h2>

      {attributions.map((attribution: AttributionProps, i: number) => {
        return <div
        key={i}
        className="flex items-center hover:bg-gray-200 w-fit"      >
        <div className="flex items-center">
          <div className="flex flex-col justify-between">
            <h3 className="text-sm">{attribution.source}</h3>
            <div className="text-sm attribution-links"
              >
              {attribution.attribution}
            </div>
          </div>
        </div>
      </div>
      })}
      
    </div>
  );
};

export default Attributions;
