import classNames from "classnames";

export default class Heading {
    static h2(props: React.HtmlHTMLAttributes<HTMLHeadingElement>) {
        return <h2 {...props} className={classNames(props.className, "prose", "prose-xl font-bold my-3")}></h2>;
    }
    static h1(props: React.HtmlHTMLAttributes<HTMLHeadingElement>) {
        return <h1 {...props} className={`prose prose-2xl my-3 font-bold ${props.className}`}></h1>;
    }
}
