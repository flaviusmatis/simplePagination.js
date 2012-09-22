DlHighlight.HELPERS.highlightByName("code", "pre");

$('#light-pagination').pagination({
	pages: 20,
	cssStyle: 'light-theme'
});

$('#dark-pagination').pagination({
	pages: 20,
	cssStyle: 'dark-theme',
	displayedPages: 3,
	edges: 3
});

$('#compact-pagination').pagination({
	pages: 70,
	cssStyle: 'compact-theme',
	displayedPages: 7
});