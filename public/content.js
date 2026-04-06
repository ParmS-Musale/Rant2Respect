
// Content Script for Rant2Respect v1.0.2
// Injects button into Gmail and LinkedIn

const LOGO_URL = chrome.runtime.getURL('logo.png');

// Simplified button: Just Logo + "R2R"
const R2R_BUTTON_HTML = `
  <button class="r2r-inject-button-v2" id="r2r-inject-btn-v2">
    <img src="${LOGO_URL}" alt="R2R" class="r2r-logo-img" />
    <span class="r2r-btn-text">R2R</span>
  </button>
`;

function injectR2RButton() {
    const textAreas = document.querySelectorAll('div[contenteditable="true"], textarea');
    
    textAreas.forEach(area => {
        if (area.closest('.r2r-wrapper-v2') || area.getAttribute('data-r2r-injected')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'r2r-wrapper-v2';
        wrapper.style.position = 'relative';
        
        area.parentNode.insertBefore(wrapper, area);
        wrapper.appendChild(area);
        area.setAttribute('data-r2r-injected', 'true');

        const btnContainer = document.createElement('div');
        btnContainer.innerHTML = R2R_BUTTON_HTML;
        const btn = btnContainer.firstElementChild;
        
        btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            showR2RModal(area);
        };

        wrapper.appendChild(btn);
    });
}

function showR2RModal(targetArea) {
    const originalText = targetArea.innerText || targetArea.value || "";
    const modalContainer = document.createElement('div');
    modalContainer.id = 'r2r-modal-container-v2';
    
    modalContainer.innerHTML = `
        <div class="r2r-modal-content" style="padding: 32px; color: #E8E4DC; background: #0C0C0C; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.9); border: 1px solid #C9A84C; width: 90%; max-width: 500px; position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <img src="${LOGO_URL}" style="width: 32px; height: 32px; border-radius: 8px;" />
                    <h2 style="font-family: 'Manrope', sans-serif; font-weight: 800; color: #F5F0E8; font-size: 22px; margin: 0;">Rant2Respect AI</h2>
                </div>
                <button id="r2r-close-v2" style="background: none; border: none; color: #5A5248; cursor: pointer; font-size: 28px;">&times;</button>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p style="font-size: 11px; font-weight: 800; color: #5A5248; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.12em;">Draft Content</p>
                <div style="padding: 18px; background: rgba(255,255,255,0.02); border-radius: 14px; font-size: 15px; color: #8A8579; font-style: italic; border: 1px solid rgba(255,255,255,0.05);">
                    "${originalText || "No context detected..."}"
                </div>
            </div>

            <div style="margin-bottom: 32px;">
                <p style="font-size: 11px; font-weight: 800; color: #C9A84C; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.12em;">Respectful Refinement</p>
                <div id="r2r-result-v2" style="padding: 18px; background: rgba(201,168,76,0.04); border: 1px solid rgba(201,168,76,0.2); border-radius: 14px; font-size: 16px; color: #F5F0E8; min-height: 100px; line-height: 1.6;">
                    Refining your message...
                </div>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 14px;">
                <button id="r2r-cancel-v2" style="padding: 12px 24px; background: transparent; border: 1px solid #3A3430; border-radius: 12px; color: #7A7068; font-weight: 600; cursor: pointer; transition: all 0.2s;">Dismiss</button>
                <button id="r2r-apply-v2" style="padding: 12px 32px; background: #C9A84C; border: none; border-radius: 12px; color: #0C0C0C; font-weight: 800; cursor: pointer; box-shadow: 0 4px 12px rgba(201, 168, 76, 0.2); transition: all 0.2s;">Insert Into Email</button>
            </div>
        </div>
    `;

    document.body.appendChild(modalContainer);

    setTimeout(() => {
        document.getElementById('r2r-result-v2').innerText = "I've identified some blockers in the current project trajectory. I'd like to schedule time to realign on expectations and agree on a clear path forward.";
    }, 1000);

    document.getElementById('r2r-close-v2').onclick = () => modalContainer.remove();
    document.getElementById('r2r-cancel-v2').onclick = () => modalContainer.remove();
    document.getElementById('r2r-apply-v2').onclick = () => {
        const text = document.getElementById('r2r-result-v2').innerText;
        if (targetArea.isContentEditable) {
            targetArea.innerText = text;
        } else {
            targetArea.value = text;
        }
        modalContainer.remove();
    };
}

const observer = new MutationObserver(injectR2RButton);
observer.observe(document.body, { childList: true, subtree: true });

injectR2RButton();
console.log('Rant2Respect v1.0.2: Loaded');
