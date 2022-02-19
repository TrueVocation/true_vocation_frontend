import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './achievement.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const AchievementDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const achievementEntity = useAppSelector(state => state.achievement.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="achievementDetailsHeading">
          <Translate contentKey="truevocationApp.achievement.detail.title">Achievement</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{achievementEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="truevocationApp.achievement.name">Name</Translate>
            </span>
          </dt>
          <dd>{achievementEntity.name}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="truevocationApp.achievement.type">Type</Translate>
            </span>
          </dt>
          <dd>{achievementEntity.type}</dd>
          <dt>
            <span id="receivedDate">
              <Translate contentKey="truevocationApp.achievement.receivedDate">Received Date</Translate>
            </span>
          </dt>
          <dd>
            {achievementEntity.receivedDate ? (
              <TextFormat value={achievementEntity.receivedDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="orientation">
              <Translate contentKey="truevocationApp.achievement.orientation">Orientation</Translate>
            </span>
          </dt>
          <dd>{achievementEntity.orientation}</dd>
          <dt>
            <Translate contentKey="truevocationApp.achievement.portfolio">Portfolio</Translate>
          </dt>
          <dd>{achievementEntity.portfolio ? achievementEntity.portfolio.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/achievement" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/achievement/${achievementEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default AchievementDetail;
