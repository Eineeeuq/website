document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'black' ? 'white' : 'black';
  document.body.style.color =
    document.body.style.color === 'white' ? 'black' : 'white';
});
<script>
  const cursor = document.querySelector('.custom-cursor');

  // Move the custom cursor
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });

  // Add active class when hovering over links
  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('mouseover', () => {
      cursor.classList.add('active');
    });
    link.addEventListener('mouseout', () => {
      cursor.classList.remove('active');
    });
  });
</script>
const cursor = document.querySelector('.custom-cursor');

// Move the cursor
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;

  // Get the element under the cursor
  const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

  // Remove blur from all elements
  document.querySelectorAll('.blur').forEach((el) => {
    el.classList.remove('blur');
  });

  // Apply blur to the current element (if it's not the cursor itself)
  if (elementUnderCursor && !elementUnderCursor.classList.contains('custom-cursor')) {
    elementUnderCursor.classList.add('blur');
  }
});