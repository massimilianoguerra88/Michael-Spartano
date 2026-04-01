import { Fragment } from "react";

export function renderLines(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <Fragment key={i}>{line}{i < lines.length - 1 && <br />}</Fragment>
  ));
}
