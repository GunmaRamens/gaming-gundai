import OpenOptions from "../../../lib/utils/openOptions";

export default function Footer() {
    return (
        <div className="my-1 flex justify-between ">
            <button className="btn" onClick={() => OpenOptions("about")}>
                この拡張機能について
            </button>
            <button className="btn" onClick={() => OpenOptions("home")}>
                設定
            </button>
        </div>
    );
}
