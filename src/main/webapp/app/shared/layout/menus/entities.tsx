import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon="asterisk" to="/city">
      <Translate contentKey="global.menu.entities.city" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/favorite">
      <Translate contentKey="global.menu.entities.favorite" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/faculty">
      <Translate contentKey="global.menu.entities.faculty" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/specialty">
      <Translate contentKey="global.menu.entities.specialty" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/university">
      <Translate contentKey="global.menu.entities.university" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/translation">
      <Translate contentKey="global.menu.entities.translation" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/demand-profession-city">
      <Translate contentKey="global.menu.entities.demandProfessionCity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/profession">
      <Translate contentKey="global.menu.entities.profession" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/contact">
      <Translate contentKey="global.menu.entities.contact" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/subject">
      <Translate contentKey="global.menu.entities.subject" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/likes">
      <Translate contentKey="global.menu.entities.likes" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/comments">
      <Translate contentKey="global.menu.entities.comments" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/comment-answer">
      <Translate contentKey="global.menu.entities.commentAnswer" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/post">
      <Translate contentKey="global.menu.entities.post" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/course">
      <Translate contentKey="global.menu.entities.course" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/school">
      <Translate contentKey="global.menu.entities.school" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/portfolio">
      <Translate contentKey="global.menu.entities.portfolio" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/language">
      <Translate contentKey="global.menu.entities.language" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/achievement">
      <Translate contentKey="global.menu.entities.achievement" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/prof-test">
      <Translate contentKey="global.menu.entities.profTest" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/question">
      <Translate contentKey="global.menu.entities.question" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/answer">
      <Translate contentKey="global.menu.entities.answer" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/test-result">
      <Translate contentKey="global.menu.entities.testResult" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/recommendation">
      <Translate contentKey="global.menu.entities.recommendation" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/answer-user">
      <Translate contentKey="global.menu.entities.answerUser" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/app-user">
      <Translate contentKey="global.menu.entities.appUser" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/pictures">
      <Translate contentKey="global.menu.entities.pictures" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
