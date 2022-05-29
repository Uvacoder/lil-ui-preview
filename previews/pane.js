import { useState } from "react";
import { Pane, Button } from "lil-ui";

export default function PanePreview() {
  const [showPane, setPaneShow] = useState({ left: false, right: false });
  return (
    <section className="max-w-[800px] bg-white rounded-2xl mx-auto border border-gray-200 shadow-lg shadow-gray-300/10 p-10">
      <h2 className="text-4xl font-black mb-4">Pane</h2>
      <div className="space-x-4">
        <Button
          className="mb-10"
          onClick={() => setPaneShow({ ...showPane, left: true })}
        >
          Show pane
        </Button>
        <Button
          className="mb-10"
          onClick={() => setPaneShow({ ...showPane, right: true })}
        >
          Show from right
        </Button>
      </div>
      <Pane
        onClose={() => setPaneShow({ left: false, right: false })}
        show={showPane.right}
        title="Pane Title"
      />
      <Pane
        onClose={() => setPaneShow({ left: false, right: false })}
        show={showPane.left}
        title="Pane Title"
        position="left"
      />
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
                <code>show</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
              <td>
                <div>
                  <p>
                    <code>true</code> to show the modal
                  </p>
                  <p>
                    <code>false</code> to hide the modal
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td>
                <code>string</code>/<code>component</code>
              </td>
              <td>-</td>
              <td>
                <div>Modal content can be passed as children</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>titleComponent</code>
              </td>
              <td>
                <code>component</code>
              </td>
              <td>-</td>
              <td>
                <div>Custom component for modal heading</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>backdropComponent</code>
              </td>
              <td>
                <code>component</code>
              </td>
              <td>-</td>
              <td>
                <div>Custom component for modal backdrop</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>-</td>
              <td>
                <div>Modal title</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>onClose</code>
              </td>
              <td>
                <code>function</code>
              </td>
              <td>-</td>
              <td>
                <div>Function to run when modal closes</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>hideBackdrop</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>-</td>
              <td>Set to true to have transparent backdrop</td>
            </tr>
            <tr>
              <td>
                <code>paneWidth</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>500px</td>
              <td>Set custom width for modal, e.g 600px</td>
            </tr>
            <tr>
              <td>
                <code>position</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>-</td>
              <td>Set <code>left</code> to show pane from left</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
