document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const transferButton = document.getElementById('transferButton');
    const transferModalOverlay = document.getElementById('transferModalOverlay');
    const closeTransferModal = document.getElementById('closeTransferModal');

    // Account Restricted Modal elements
    const accountRestrictedModalOverlay = document.getElementById('accountRestrictedModalOverlay');
    const closeRestrictedModal = document.getElementById('closeRestrictedModal');

    // --- Sidebar Functionality ---
    if (menuIcon && sidebar && sidebarOverlay && closeSidebarBtn) {
        menuIcon.addEventListener('click', function() {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        });

        closeSidebarBtn.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });

        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }

    // --- Transfer Modal Functionality ---
    if (transferButton && transferModalOverlay && closeTransferModal) {
        transferButton.addEventListener('click', function() {
            transferModalOverlay.classList.add('active');
        });

        closeTransferModal.addEventListener('click', function() {
            transferModalOverlay.classList.remove('active');
        });

        transferModalOverlay.addEventListener('click', function(event) {
            if (event.target === transferModalOverlay) {
                transferModalOverlay.classList.remove('active');
            }
        });
    }

    // --- Account Restricted Modal Functionality ---
    if (accountRestrictedModalOverlay) {
        // We assume the PHP sets display:none if not restricted.
        // If the modal is visible (no display:none), add the 'active' class for transitions.
        if (accountRestrictedModalOverlay.style.display !== 'none') {
            setTimeout(() => {
                accountRestrictedModalOverlay.classList.add('active');
            }, 10); // Small delay to allow display property to be set before transition
        }

        // Close button for the restricted modal
        if (closeRestrictedModal) {
            closeRestrictedModal.addEventListener('click', function() {
                accountRestrictedModalOverlay.classList.remove('active');
                // You might want to hide it completely after transition if not needed again
                setTimeout(() => {
                    accountRestrictedModalOverlay.style.display = 'none';
                }, 300); // Match CSS transition duration
            });
        }

        // Close if clicking outside the modal content (on the overlay)
        accountRestrictedModalOverlay.addEventListener('click', function(event) {
            if (event.target === accountRestrictedModalOverlay) {
                accountRestrictedModalOverlay.classList.remove('active');
                setTimeout(() => {
                    accountRestrictedModalOverlay.style.display = 'none';
                }, 300); // Match CSS transition duration
            }
        });
    }
});