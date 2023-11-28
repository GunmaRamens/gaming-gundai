import classNames from "classnames";

const commonClassNames = ["prose", "my-3", "font-bold"];
type headingProps = React.HtmlHTMLAttributes<HTMLHeadingElement>;

export function h1(props: headingProps) {
    return <h1 {...props} className={classNames(props.className, commonClassNames, "prose-2xl")}></h1>;
}
export function h2(props: headingProps) {
    return <h2 {...props} className={classNames(props.className, commonClassNames, "prose-xl")}></h2>;
}
export function h3(props: headingProps) {
    return <h3 {...props} className={classNames(props.className, commonClassNames, "prose-lg")}></h3>;
}

export function h4(props: headingProps) {
    return <h4 {...props} className={classNames(props.className, commonClassNames, "prose-md")}></h4>;
}

export default { h1, h2, h3, h4 };
