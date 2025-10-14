import { SceneController } from './SceneController';
import { UIController } from './UIController';
import { VSCodeContext } from './VSCodeContext';

/* global acquireVsCodeApi */
class MainApplication
{
  constructor()
  {
    this.ui_controller = new UIController(this);
    this.scene_controller = new SceneController(this);

    if (typeof acquireVsCodeApi === 'undefined')
    {
      // Fallback for testing
      window.acquireVsCodeApi = () =>
      {
        return {
          postMessage: (message) =>
          {
            console.log('Post message (fallback):', message);
            parent.postMessage(message, '*');
          }
        };
      };
    }

    VSCodeContext.ctx = acquireVsCodeApi();
  }

  init()
  {
    this.ui_controller.init(this.scene_controller);
    this.scene_controller.init(this.ui_controller);

    // Listen for messages from the extension
    window.addEventListener('message', event =>
    {
      const message = event.data;
      switch (message.type)
      {
      case 'loadModelFromUri':
        this.ui_controller.panel.contents.info.update_extension(message.dataUri);
        this.scene_controller.loadModelFromUri(message.dataUri, message.fileSize);
        break;
      case 'loadModelFromBase64':
        this.ui_controller.panel.contents.info.update_extension(message.extension);
        this.scene_controller.loadModelFromBase64(message.data, message.fileSize);
        break;
      case 'setWebViewPath':
        this.scene_controller.setLibURIs(message.webview_path);
        break;
      }
    });

    VSCodeContext.ctx.postMessage({ type: 'ready' });
  }
}

document.addEventListener('DOMContentLoaded', () =>
{
  console.log('WebView loaded!');

  const main_application = new MainApplication();
  main_application.init();
});
