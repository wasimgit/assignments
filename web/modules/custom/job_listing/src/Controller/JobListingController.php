<?php

namespace Drupal\job_listing\Controller;


use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use GuzzleHttp\Client;


const API_URL = 'https://dummy-rest-api.specbee.site/api/v1/jobs';

/**
 * Class JobListingController.
 */
class JobListingController extends ControllerBase {


    /**
     * {@inheritdoc}
     */
    public function JobListingAction() {

        $response = \Drupal::service('http_client')->request('GET', API_URL);
        $data = json_decode($response->getBody()->getContents(), TRUE);

        return [
          '#theme' => 'job_listing',
          '#jobs' => $data ?? [],
          '#attached' => [
            'library' => [
              'job_listing/job_listing',
            ],
          ],
        ];
    }

  }
