
// Content Script for Rant2Respect
// Injects button into Gmail and LinkedIn

const R2R_BUTTON_HTML = `
  <button class="r2r-inject-button" id="r2r-inject-btn">
    <img src="https://rant2respect.vercel.app/favicon.svg" onerror="this.src='https://via.placeholder.com/16?text=R'" alt="R2R" />
    R2R Transform
  </button>
`;

// Helper to find the active text area
function findActiveTextArea(target) {
    if (target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return target;
    }
    return null;
}

// Function to inject button near text areas
function injectR2RButton() {
    const textAreas = document.querySelectorAll('div[contenteditable="true"], textarea');
    
    textAreas.forEach(area => {
        if (area.closest('.r2r-wrapper')) return; // Already injected

        const wrapper = document.createElement('div');
        wrapper.className = 'r2r-wrapper';
        wrapper.style.position = 'relative';
        
        area.parentNode.insertBefore(wrapper, area);
        wrapper.appendChild(area);

        const btnContainer = document.createElement('div');
        btnContainer.innerHTML = R2R_BUTTON_HTML;
        const btn = btnContainer.firstElementChild;
        
        // Position it at the bottom right of the textarea
        btn.style.bottom = '10px';
        btn.style.right = '10px';

        btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            showR2RModal(area);
        };

        wrapper.appendChild(btn);
    });
}

// Function to show the transformation modal
function showR2RModal(targetArea) {
    const originalText = targetArea.innerText || targetArea.value || "";
    
    const modalContainer = document.createElement('div');
    modalContainer.id = 'r2r-modal-container';
    
    modalContainer.innerHTML = `
        <div class="r2r-modal-content" style="padding: 32px; color: #E8E4DC; background: #0C0C0C; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.8);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h2 style="font-family: 'Manrope', sans-serif; font-weight: 800; color: #F5F0E8; font-size: 20px; margin: 0;">AI Transformation</h2>
                <button id="r2r-close-modal" style="background: none; border: none; color: #5A5248; cursor: pointer; font-size: 20px;">&times;</button>
            </div>
            
            <div style="margin-bottom: 16px;">
                <p style="font-size: 10px; font-weight: 700; color: #5A5248; text-transform: uppercase; margin-bottom: 8px;">Original Rant</p>
                <div style="padding: 16px; background: rgba(255,255,255,0.03); border-radius: 12px; font-size: 14px; color: #7A7068; font-style: italic;">
                    "${originalText || "No text detected..."}"
                </div>
            </div>

            <div style="margin-bottom: 24px;">
                <p style="font-size: 10px; font-weight: 700; color: #C9A84C; text-transform: uppercase; margin-bottom: 8px;">Professional Result</p>
                <div id="r2r-result-box" style="padding: 16px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.15); border-radius: 12px; font-size: 14px; color: #F5F0E8; min-height: 80px;">
                    Transforming...
                </div>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 12px;">
                <button id="r2r-cancel" style="padding: 10px 20px; background: none; border: 1px solid #3A3430; border-radius: 8px; color: #5A5248; font-weight: 600; cursor: pointer;">Cancel</button>
                <button id="r2r-apply" style="padding: 10px 24px; background: #C9A84C; border: none; border-radius: 8px; color: #0C0C0C; font-weight: 700; cursor: pointer;">Auto-Fill</button>
            </div>
        </div>
    `;

    document.body.appendChild(modalContainer);

    // Mock AI Call
    setTimeout(() => {
        const resultBox = document.getElementById('r2r-result-box');
        resultBox.innerText = "I have some concerns regarding the current approach. Let's schedule time to realign on expectations and agree on a clear path forward.";
    }, 1200);

    // Close logic
    document.getElementById('r2r-close-modal').onclick = () => modalContainer.remove();
    document.getElementById('r2r-cancel').onclick = () => modalContainer.remove();
    
    // Auto-fill logic
    document.getElementById('r2r-apply').onclick = () => {
        const professionalText = document.getElementById('r2r-result-box').innerText;
        if (targetArea.isContentEditable) {
            targetArea.innerText = professionalText;
        } else {
            targetArea.value = professionalText;
        }
        modalContainer.remove();
    };
}

// Observe DOM for dynamic elements
const observer = new MutationObserver(injectR2RButton);
observer.observe(document.body, { childList: true, subtree: true });

// Initial injection
injectR2RButton();
console.log('Rant2Respect: Content Script Active');
