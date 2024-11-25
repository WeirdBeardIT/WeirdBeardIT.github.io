var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Function to update theme icons
function updateThemeIcons(isDark) {
  if (isDark) {
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleDarkIcon.classList.add('hidden');
  } else {
    themeToggleLightIcon.classList.add('hidden');
    themeToggleDarkIcon.classList.remove('hidden');
  }
}

// Set dark mode as the default theme if not set
if (localStorage.getItem('color-theme') === 'dark' || 
    (!localStorage.getItem('color-theme') && 
    !window.matchMedia('(prefers-color-scheme: light)').matches)) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
    updateThemeIcons(true);
} else {
    document.documentElement.classList.remove('dark');
    updateThemeIcons(false);
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    // Toggle dark and light mode
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
});
