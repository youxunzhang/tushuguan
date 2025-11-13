import { authorsByCountry } from './authors-data.js';

const sanitizeId = (name) =>
  `country-${name}`
    .trim()
    .replace(/[\s·•]/g, '-')
    .replace(/[()（）]/g, '')
    .replace(/-+/g, '-')
    .toLowerCase();

const createOption = (value, label) => {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = label;
  return option;
};

const renderCountries = ({ data, container, tocContainer, summaryNodes }) => {
  container.innerHTML = '';
  tocContainer.innerHTML = '';

  if (data.length === 0) {
    container.classList.add('hidden');
    summaryNodes.emptyState.classList.remove('hidden');
    summaryNodes.visibleCountry.textContent = '0';
    summaryNodes.visibleAuthor.textContent = '0';
    return;
  }

  container.classList.remove('hidden');
  summaryNodes.emptyState.classList.add('hidden');

  const totalAuthors = data.reduce((sum, item) => sum + item.authors.length, 0);
  summaryNodes.visibleCountry.textContent = data.length.toString();
  summaryNodes.visibleAuthor.textContent = totalAuthors.toString();

  data.forEach((item) => {
    const sectionId = sanitizeId(item.country);

    const tocLink = document.createElement('a');
    tocLink.href = `#${sectionId}`;
    tocLink.textContent = `${item.flag} ${item.country}`;
    tocLink.className = 'author-index-link';
    tocContainer.appendChild(tocLink);

    const card = document.createElement('article');
    card.className = 'author-card';
    card.id = sectionId;

    const header = document.createElement('div');
    header.className = 'author-card-header';

    const icon = document.createElement('div');
    icon.className = 'author-card-flag';
    icon.textContent = item.flag;
    header.appendChild(icon);

    const meta = document.createElement('div');
    meta.className = 'author-card-meta';

    const title = document.createElement('h3');
    title.textContent = item.country;
    meta.appendChild(title);

    const subTitle = document.createElement('p');
    subTitle.textContent = `${item.region} · ${item.description}`;
    meta.appendChild(subTitle);

    header.appendChild(meta);
    card.appendChild(header);

    const list = document.createElement('ol');
    list.className = 'author-list';

    item.authors.forEach((author) => {
      const listItem = document.createElement('li');
      listItem.textContent = author;
      list.appendChild(listItem);
    });

    card.appendChild(list);
    container.appendChild(card);
  });
};

const setupAuthorsPage = () => {
  const totalCountries = authorsByCountry.length;
  const totalAuthors = authorsByCountry.reduce((sum, item) => sum + item.authors.length, 0);

  const countryTotalNode = document.getElementById('country-total');
  const authorTotalNode = document.getElementById('author-total');
  const regionFilter = document.getElementById('region-filter');
  const searchInput = document.getElementById('author-search');
  const grid = document.getElementById('author-country-grid');
  const toc = document.getElementById('author-country-toc');
  const emptyState = document.getElementById('author-empty-state');
  const visibleCountryNode = document.getElementById('author-visible-count');
  const visibleAuthorNode = document.getElementById('author-visible-authors');

  if (!countryTotalNode || !authorTotalNode || !regionFilter || !searchInput || !grid || !toc) {
    return;
  }

  countryTotalNode.textContent = totalCountries.toString();
  authorTotalNode.textContent = totalAuthors.toString();

  const regions = Array.from(new Set(authorsByCountry.map((item) => item.region)));
  regionFilter.appendChild(createOption('', '全部地区'));
  regions.forEach((region) => {
    regionFilter.appendChild(createOption(region, region));
  });
  regionFilter.value = '';

  const state = {
    keyword: '',
    region: '',
  };

  const applyFilter = () => {
    const keyword = state.keyword.toLowerCase();
    const result = authorsByCountry.filter((item) => {
      if (state.region && item.region !== state.region) {
        return false;
      }

      if (!keyword) {
        return true;
      }

      const countryMatch = item.country.toLowerCase().includes(keyword);
      const authorMatch = item.authors.some((author) => author.toLowerCase().includes(keyword));
      return countryMatch || authorMatch;
    });

    renderCountries({
      data: result,
      container: grid,
      tocContainer: toc,
      summaryNodes: {
        emptyState,
        visibleCountry: visibleCountryNode,
        visibleAuthor: visibleAuthorNode,
      },
    });
  };

  searchInput.addEventListener('input', (event) => {
    state.keyword = event.target.value.trim().toLowerCase();
    applyFilter();
  });

  regionFilter.addEventListener('change', (event) => {
    state.region = event.target.value;
    applyFilter();
  });

  applyFilter();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupAuthorsPage);
} else {
  setupAuthorsPage();
}
