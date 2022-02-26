import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './pictures.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const PicturesDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const picturesEntity = useAppSelector(state => state.pictures.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="picturesDetailsHeading">
          <Translate contentKey="truevocationApp.pictures.detail.title">Pictures</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{picturesEntity.id}</dd>
          <dt>
            <span id="picture">
              <Translate contentKey="truevocationApp.pictures.picture">Picture</Translate>
            </span>
          </dt>
          <dd>{picturesEntity.picture}</dd>
          <dt>
            <Translate contentKey="truevocationApp.pictures.course">Course</Translate>
          </dt>
          <dd>{picturesEntity.course ? picturesEntity.course.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.pictures.university">University</Translate>
          </dt>
          <dd>{picturesEntity.university ? picturesEntity.university.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.pictures.portfolio">Portfolio</Translate>
          </dt>
          <dd>{picturesEntity.portfolio ? picturesEntity.portfolio.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/pictures" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/pictures/${picturesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default PicturesDetail;
