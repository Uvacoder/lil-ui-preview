import { useState } from "react";
import { Pane, Button } from "lil-ui";

export default function PanePreview() {
  const [showPane, setPaneShow] = useState(false);
  return (
    <section className="max-w-[800px] bg-white rounded-2xl mx-auto border border-gray-200 shadow-lg shadow-gray-300/10 p-10">
      <h2 className="text-4xl font-black mb-4">Pane</h2>
      <Button className="mb-10" onClick={() => setPaneShow(true)}>
        Show Pane
      </Button>
      <Pane
        onClose={() => setPaneShow(false)}
        show={showPane}
        title="Pane Title"
      ></Pane>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
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
              <td></td>
              <td>
                <div>Modal content can be passed as children</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>titleComponent</code>
              </td>
              <td></td>
              <td>
                <div>Custom component for modal heading</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>backdropComponent</code>
              </td>
              <td></td>
              <td>
                <div>Custom component for modal backdrop</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td></td>
              <td>
                <div>Modal title</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>onClose</code>
              </td>
              <td></td>
              <td>
                <div>Function to run when modal closes</div>
              </td>
            </tr>
            <tr>
              <td>
                <code>position</code>
              </td>
              <td><code>right</code></td>
              <td>
                <div><code>left</code> to open the pane from left</div>
                <div><code>right</code> or leave empty to open the pane from right</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
