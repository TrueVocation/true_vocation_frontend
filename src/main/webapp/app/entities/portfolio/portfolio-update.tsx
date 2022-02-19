import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IAppUser } from 'app/shared/model/app-user.model';
import { getEntities as getAppUsers } from 'app/entities/app-user/app-user.reducer';
import { ILanguage } from 'app/shared/model/language.model';
import { getEntities as getLanguages } from 'app/entities/language/language.reducer';
import { ISchool } from 'app/shared/model/school.model';
import { getEntities as getSchools } from 'app/entities/school/school.reducer';
import { getEntity, updateEntity, createEntity, reset } from './portfolio.reducer';
import { IPortfolio } from 'app/shared/model/portfolio.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const PortfolioUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const appUsers = useAppSelector(state => state.appUser.entities);
  const languages = useAppSelector(state => state.language.entities);
  const schools = useAppSelector(state => state.school.entities);
  const portfolioEntity = useAppSelector(state => state.portfolio.entity);
  const loading = useAppSelector(state => state.portfolio.loading);
  const updating = useAppSelector(state => state.portfolio.updating);
  const updateSuccess = useAppSelector(state => state.portfolio.updateSuccess);
  const handleClose = () => {
    props.history.push('/portfolio' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getAppUsers({}));
    dispatch(getLanguages({}));
    dispatch(getSchools({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...portfolioEntity,
      ...values,
      languages: mapIdList(values.languages),
      schools: mapIdList(values.schools),
      appUser: appUsers.find(it => it.id.toString() === values.appUser.toString()),
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
          ...portfolioEntity,
          appUser: portfolioEntity?.appUser?.id,
          languages: portfolioEntity?.languages?.map(e => e.id.toString()),
          schools: portfolioEntity?.schools?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.portfolio.home.createOrEditLabel" data-cy="PortfolioCreateUpdateHeading">
            <Translate contentKey="truevocationApp.portfolio.home.createOrEditLabel">Create or edit a Portfolio</Translate>
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
                  id="portfolio-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('truevocationApp.portfolio.picture')}
                id="portfolio-picture"
                name="picture"
                data-cy="picture"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.portfolio.gender')}
                id="portfolio-gender"
                name="gender"
                data-cy="gender"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.portfolio.hobby')}
                id="portfolio-hobby"
                name="hobby"
                data-cy="hobby"
                type="text"
                validate={{
                  maxLength: { value: 1000, message: translate('entity.validation.maxlength', { max: 1000 }) },
                }}
              />
              <ValidatedField
                label={translate('truevocationApp.portfolio.aboutMe')}
                id="portfolio-aboutMe"
                name="aboutMe"
                data-cy="aboutMe"
                type="text"
                validate={{
                  maxLength: { value: 1000, message: translate('entity.validation.maxlength', { max: 1000 }) },
                }}
              />
              <ValidatedField
                id="portfolio-appUser"
                name="appUser"
                data-cy="appUser"
                label={translate('truevocationApp.portfolio.appUser')}
                type="select"
              >
                <option value="" key="0" />
                {appUsers
                  ? appUsers.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                label={translate('truevocationApp.portfolio.language')}
                id="portfolio-language"
                data-cy="language"
                type="select"
                multiple
                name="languages"
              >
                <option value="" key="0" />
                {languages
                  ? languages.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                label={translate('truevocationApp.portfolio.school')}
                id="portfolio-school"
                data-cy="school"
                type="select"
                multiple
                name="schools"
              >
                <option value="" key="0" />
                {schools
                  ? schools.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/portfolio" replace color="info">
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

export default PortfolioUpdate;
