import { FrontConfigs } from "../config/config";

export default function SwitchItem() {
    return FrontConfigs.map((config) => {
        return (
            <div className="flex w-full justify-center child:text-center my-5" key={config.key}>
                <div className="w-1/2">
                    <input
                        type="checkbox"
                        className=" daisy-toggle daisy-toggle-info"
                        onChange={(e) => {
                            config.value = e.target.checked;
                            console.log(config);
                        }}
                    />
                </div>
                <div className="w-1/2">
                    <p>{config.name}</p>
                </div>
            </div>
        );
    });
}
