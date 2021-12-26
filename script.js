const initialSkillsList = [
  'HTML&CSS',
  'ANGULAR',
  'REACT',
  'VUE',
  'NODEJS',
  'JAVASCRIPT',
  'JAVA',
  'SPRING',
  'C#',
  '.NET',
  'SQL',
];

let skillsList = [];
let selectedSkillsList = ['HTML&CSS', 'REACT', 'ANGULAR'];

const fillDataList = (skillsList = initialSkillsList) => {
  const skills = document.getElementById('skills');

  skills.innerHTML = '';

  skillsList.forEach((el) => {
    const opt = document.createElement('option');
    opt.value = el;
    skills.appendChild(opt);
  });
};

const onTagClicked = (el) => {
  selectedSkillsList = selectedSkillsList.filter((item) => item !== el);
  skillsList.push(el);
  fillDataList(skillsList);
  fillSelectedSkills(selectedSkillsList);
};

const fillSelectedSkills = (selectedSkills) => {
  const selectedSkillsElement = document.getElementById('selectedskills');
  selectedSkillsElement.innerHTML = '';

  selectedSkills.forEach((el) => {
    const div = document.createElement('div');
    div.classList.add('selected-skill');
    div.innerText = el;
    const img = document.createElement('img');
    img.classList.add('cross-icon');
    img.src = 'cross_icon.svg';
    img.addEventListener('click', () => onTagClicked(el), false);
    div.appendChild(img);
    selectedSkillsElement.appendChild(div);
  });
};

const onSelectedSkill = (evt) => {
  const selectedValue = evt.target.value;
  if (!selectedValue) return;

  if (
    !initialSkillsList.some(
      (el) => el.toLocaleLowerCase() === selectedValue.toLocaleLowerCase()
    )
  )
    return;

  skillsList = skillsList.filter((item) => item !== selectedValue);
  selectedSkillsList.push(selectedValue);
  const selectedskill = document.getElementById('selectedskill');
  selectedskill.value = '';
  fillDataList(skillsList);
  fillSelectedSkills(selectedSkillsList);
};

const onCreate = () => {
  skillsList = initialSkillsList.filter(
    (el) => !selectedSkillsList.some((item) => item === el)
  );
  fillDataList(skillsList);
  fillSelectedSkills(selectedSkillsList);

  const selectedskill = document.getElementById('selectedskill');
  selectedskill.addEventListener('change', onSelectedSkill, false);
};

onCreate();
