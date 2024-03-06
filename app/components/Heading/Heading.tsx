import React from 'react';

export type HeadingProps = {
  text: string,
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

const Heading = (props: HeadingProps) => {
  const text = props.text;
//wrap html heading tags

    const Tag = `h${props.level}` as keyof JSX.IntrinsicElements;
    return (
        <Tag className={props.className}>{text}</Tag>
    );


};

export default Heading;
