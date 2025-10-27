console.log('Settings widget loaded');

(function() {
  // === Inject Settings Button ===
  const settingsBtn = document.createElement('button');
  settingsBtn.id = 'settingsBtn';
  settingsBtn.textContent = '⚙️ Settings';
  document.body.appendChild(settingsBtn);

  // === Inject Overlay + iFrame ===
  const overlay = document.createElement('div');
  overlay.id = 'settingsOverlay';
  overlay.innerHTML = `
    <iframe id="settingsFrame" src="/simple_pong_67/settings/settings.html"></iframe>
  `;
  document.body.appendChild(overlay);

  // === Inject CSS Styles ===
  const style = document.createElement('style');
  style.textContent = `
    #settingsBtn {
      position: fixed;
      top: 15px;
      right: 15px;
      background: rgba(255,255,255,0.1);
      border: 1px solid #888;
      border-radius: 8px;
      color: white;
      padding: 8px 12px;
      cursor: pointer;
      z-index: 9998;
      backdrop-filter: blur(4px);
      transition: background 0.3s;
    }
    #settingsBtn:hover { background: rgba(255,255,255,0.2); }

    #settingsOverlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    #settingsFrame {
      width: 400px;
      height: 300px;
      border: none;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
    }
  `;
  document.head.appendChild(style);

  // === Behavior ===
  settingsBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
  });

  // Listen for messages from the iframe
  window.addEventListener('message', (event) => {
    if (event.data.action === 'closeSettings') {
      overlay.style.display = 'none';
    }
  });
})();
