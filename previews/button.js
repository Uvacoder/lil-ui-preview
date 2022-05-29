import { useState } from "react";
import { Button } from "lil-ui";

export default function ButtonPreview() {
  return (
    <section className="max-w-[800px] bg-white rounded-2xl mx-auto border border-gray-200 shadow-lg shadow-gray-300/10 p-10">
      <h2 className="text-4xl font-black mb-4">Button</h2>
      <Button className="mb-10" onClick={() => {}}>
        Click
      </Button>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default value</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>className</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>-</td>
              <td>
                Custom class names for <code>button</code> tag
              </td>
            </tr>
            <tr>
              <td>
                <code>onClick</code>
              </td>
              <td><code>function</code></td>
              <td>
                -
              </td>
              <td>
                A function that's called when button is clicked
              </td>
            </tr>
            <tr>
              <td>
                <code>style</code>
              </td>
              <td><code>object</code></td>
              <td>-</td>
              <td>
                Object of inline styles to apply on <code>button</code> tag
              </td>
            </tr>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td><code>string</code>/<code>component</code></td>
              <td>
                -
              </td>
              <td>
                Label for the button
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
