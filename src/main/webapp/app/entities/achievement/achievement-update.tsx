import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IPortfolio } from 'app/shared/model/portfolio.model';
import { getEntities as getPortfolios } from 'app/entities/portfolio/portfolio.reducer';
import { getEntity, updateEntity, createEntity, reset } from './achievement.reducer';
import { IAchievement } from 'app/shared/model/achievement.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const AchievementUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const portfolios = useAppSelector(state => state.portfolio.entities);
  const achievementEntity = useAppSelector(state => state.achievement.entity);
  const loading = useAppSelector(state => state.achievement.loading);
  const updating = useAppSelector(state => state.achievement.updating);
  const updateSuccess = useAppSelector(state => state.achievement.updateSuccess);
  const handleClose = () => {
    props.history.push('/achievement' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getPortfolios({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...achievementEntity,
      ...values,
      portfolio: portfolios.find(it => it.id.toString() === values.portfolio.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...achievementEntity,
          portfolio: achievementEntity?.portfolio?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.achievement.home.createOrEditLabel" data-cy="AchievementCreateUpdateHeading">
            <Translate contentKey="truevocationApp.achievement.home.createOrEditLabel">Create or edit a Achievement</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="achievement-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('truevocationApp.achievement.name')}
                id="achievement-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.achievement.type')}
                id="achievement-type"
                name="type"
                data-cy="type"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.achievement.receivedDate')}
                id="achievement-receivedDate"
                name="receivedDate"
                data-cy="receivedDate"
                type="date"
              />
              <ValidatedField
                label={translate('truevocationApp.achievement.orientation')}
                id="achievement-orientation"
                name="orientation"
                data-cy="orientation"
                type="text"
              />
              <ValidatedField
                id="achievement-portfolio"
                name="portfolio"
                data-cy="portfolio"
                label={translate('truevocationApp.achievement.portfolio')}
                type="select"
              >
                <option value="" key="0" />
                {portfolios
                  ? portfolios.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/achievement" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AchievementUpdate;
