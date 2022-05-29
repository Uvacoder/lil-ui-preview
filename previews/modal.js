import { useState } from "react";
import { Modal, Button } from "lil-ui";

export default function ModalPreview() {
  const [showModal, setModalShow] = useState(false);
  return (
    <section className="max-w-[800px] bg-white rounded-2xl mx-auto border border-gray-200 shadow-lg shadow-gray-300/10 p-10">
      <h2 className="text-4xl font-black mb-4">Modal</h2>
      <Button className="mb-10" onClick={() => setModalShow(true)}>
        Show Modal
      </Button>
      <Modal
        onClose={() => setModalShow(false)}
        show={showModal}
        title="Modal Title"
      ></Modal>

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
                <code>modalWidth</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>500px</td>
              <td>Set custom width for modal, e.g 600px</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
