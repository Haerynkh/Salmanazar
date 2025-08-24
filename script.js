
// Simple site logic: load tastings from JSON and render
async function loadTastings(limit=null){
  const res = await fetch('data/degustations.json');
  const data = await res.json();
  const items = data.degustations.sort((a,b)=> new Date(b.date) - new Date(a.date));
  return limit ? items.slice(0, limit) : items;
}

function el(tag, attrs={}, ...children){
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k==='class') node.className = v;
    else if(k.startsWith('on') && typeof v === 'function') node.addEventListener(k.substring(2), v);
    else node.setAttribute(k,v);
  });
  for(const c of children){
    if(c==null) continue;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

async function renderLatest(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  const latest = await loadTastings(6);
  const grid = el('div',{class:'grid'});
  latest.forEach(t=>{
    grid.appendChild(cardForTasting(t));
  });
  container.appendChild(grid);
}

function cardForTasting(t){
  const img = el('img',{src:t.image || 'assets/placeholder.jpg', alt:t.title});
  const title = el('h3',{}, t.title);
  const meta = el('div',{}, el('span',{class:'badge'}, new Date(t.date).toLocaleDateString()), el('span',{class:'badge'}, t.region));
  const notes = el('p',{class:'small'}, t.notes || '');
  const varietals = t.cepages && t.cepages.length ? el('p',{class:'small'}, 'Cépages : ' + t.cepages.join(', ')) : null;
  const p = el('div',{class:'p'}, meta, title, varietals, notes);
  return el('div',{class:'card'}, img, p);
}

async function renderAllTastings(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  const items = await loadTastings();
  const table = el('table',{});
  const thead = el('thead',{}, el('tr',{}, el('th',{},'Date'), el('th',{},'Titre'), el('th',{},'Région'), el('th',{},'Cépages'), el('th',{},'Notes')));
  const tbody = el('tbody',{});
  items.forEach(t=>{
    tbody.appendChild(el('tr',{},
      el('td',{}, new Date(t.date).toLocaleDateString()),
      el('td',{}, t.title),
      el('td',{}, t.region),
      el('td',{}, (t.cepages||[]).join(', ')),
      el('td',{}, t.notes || '')
    ));
  });
  table.appendChild(thead); table.appendChild(tbody);
  container.appendChild(table);
}

function markActive(linkId){
  const links = document.querySelectorAll('.menu a');
  links.forEach(a=>a.classList.remove('active'));
  const elx = document.getElementById(linkId);
  if(elx) elx.classList.add('active');
}
