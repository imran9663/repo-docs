import type { Components } from "react-markdown";

export const markdownComponents: Components = {
    h1: ({ children, ...props }) => (
        <h1
            className="
      scroll-m-24
      text-5xl
      font-bold
      tracking-tight
      text-foreground
      mb-8
      mt-2
      "
            {...props}
        >
            {children}
        </h1>
    ),

    h2: ({ children, ...props }) => (
        <h2
            className="
      scroll-m-24
      mt-16
      mb-6
      text-4xl
      font-semibold
      tracking-tight
      border-b
      border-border
      pb-3
      "
            {...props}
        >
            {children}
        </h2>
    ),

    h3: ({ children, ...props }) => (
        <h3
            className="
      mt-12
      mb-4
      text-3xl
      font-semibold
      "
            {...props}
        >
            {children}
        </h3>
    ),

    h4: ({ children, ...props }) => (
        <h4
            className="
      mt-10
      mb-3
      text-2xl
      font-semibold
      "
            {...props}
        >
            {children}
        </h4>
    ),

    h5: ({ children }) => (
        <h5 className="text-xl font-semibold mt-8 mb-2">
            {children}
        </h5>
    ),

    h6: ({ children }) => (
        <h6 className="text-lg font-semibold mt-8 mb-2 text-muted-foreground">
            {children}
        </h6>
    ),

    p: ({ children }) => (
        <p
            className="
      text-base
      leading-8
      text-muted-foreground
      mb-6
      "
        >
            {children}
        </p>
    ),

    strong: ({ children }) => (
        <strong className="font-semibold text-foreground">
            {children}
        </strong>
    ),

    em: ({ children }) => (
        <em className="italic">
            {children}
        </em>
    ),

    hr: () => (
        <hr className="my-12 border-border" />
    ),

    br: () => <br className="mb-2" />,

    ul: ({ children }) => (
        <ul
            className="
      list-disc
      ml-6
      mb-6
      space-y-2
      "
        >
            {children}
        </ul>
    ),

    ol: ({ children }) => (
        <ol
            className="
      list-decimal
      ml-6
      mb-6
      space-y-2
      "
        >
            {children}
        </ol>
    ),

    li: ({ children }) => (
        <li className="leading-8 text-muted-foreground">
            {children}
        </li>
    ),

    blockquote: ({ children }) => (
        <blockquote
            className="
      my-8
      border-l-4
      border-primary
      bg-primary/5
      rounded-r-xl
      px-6
      py-4
      italic
      text-muted-foreground
      "
        >
            {children}
        </blockquote>
    ),

    table: ({ children }) => (
        <div className="overflow-auto my-8">
            <table
                className="
        w-full
        border-collapse
        rounded-xl
        overflow-hidden
        "
            >
                {children}
            </table>
        </div>
    ),

    thead: ({ children }) => (
        <thead className="bg-muted">
            {children}
        </thead>
    ),

    tbody: ({ children }) => (
        <tbody>{children}</tbody>
    ),

    tr: ({ children }) => (
        <tr className="border-b border-border">
            {children}
        </tr>
    ),

    th: ({ children }) => (
        <th
            className="
      px-4
      py-3
      text-left
      font-semibold
      "
        >
            {children}
        </th>
    ),

    td: ({ children }) => (
        <td
            className="
      px-4
      py-3
      align-top
      text-muted-foreground
      "
        >
            {children}
        </td>
    ),

    a: ({ href, children }) => (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
      text-primary
      underline
      underline-offset-4
      hover:opacity-80
      transition
      "
        >
            {children}
        </a>
    ),

    img: ({ src, alt }) => (
        <img
            src={src ?? ""}
            alt={alt ?? ""}
            className="
      rounded-xl
      border
      border-border
      my-8
      w-full
      "
        />
    ),

    code (props) {
        const { children, className } = props;

        const inline = !className;

        if (inline) {
            return (
                <code
                    className="
          rounded
          bg-muted
          px-1.5
          py-1
          font-mono
          text-sm
          text-primary
          "
                >
                    {children}
                </code>
            );
        }

        return (
            <code className={className}>
                {children}
            </code>
        );
    },

    pre: ({ children }) => (
        <pre
            className="
      my-8
      overflow-auto
      rounded-2xl
      border
      border-border
      bg-code-bg
      p-5
      text-sm
      "
        >
            {children}
        </pre>
    )
};