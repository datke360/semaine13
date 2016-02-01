angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.usuario = "";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
	
		$scope.questions = [
			{id:"01",
			 question:"Le colvert est ?",
			 reponseA:"Un canard",
			 reponseB:"Un coq",
			 reponseC:"Un perroquet",
			 reponseD:"Une poule",
			 correct:"reponseA",
			 points:2,
			 image:"http://www.photos-neuch.net/Images/Faune/Oiseaux/colvert.jpg",
			},
			{id:"02",
			 question:"Le petit-gris est ?",
			 reponseA:"Un rat",
			 reponseB:"Un chat",
			 reponseC:"Un cheval",
			 reponseD:"Un escargot",
			 correct:"reponseD",
			 points:2,
			 image:"http://www.cen-npdc.org/templates/fr/newsletter/img/2013_09_NewsletterVigie/PetitGris_JMS.jpg",
			},
			{id:"03",
			 question:"Quel est le nom du poisson surnommé le 'cheval de mer' ?",
			 reponseA:"Le dauphin",
			 reponseB:"L'hippocampe",
			 reponseC:"L'espadon",
			 reponseD:"La carpe",
			 correct:"reponseB",
			 points:2,
			 image:"http://soocurious.com/fr/wp-content/uploads/2014/06/hippocampe.jpg",
			},
			{id:"04",
			 question:"Quel est la capitale de l'Italie ?",
			 reponseA:"Venise",
			 reponseB:"Milan",
			 reponseC:"Rome",
			 reponseD:"Florence",
			 correct:"reponseC",
			 points:2,
			 image:"http://c.tadst.com/gfx/750x500/roman-calendar.jpg?1",
			},
			{id:"05",
			 question:"Quelle pâtisserie mange-t-on le plus souvent à Noël en France ?",
			 reponseA:"La galette des rois",
			 reponseB:"La bûche de Noel",
			 reponseC:"La religieuse",
			 reponseD:"L'éclair au chocolat",
			 correct:"reponseB",
			 points:2,
			 image:"http://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/photo_photos/original/12/buche-de-noel-flickr-10434903766_67ba928672_h.jpg",
			},
			{id:"06",
			 question:"De quelle couleur est la neige ?",
			 reponseA:"Rouge",
			 reponseB:"Noire",
			 reponseC:"Blanc",
			 reponseD:"violet",
			 correct:"reponseC",
			 points:2,
			 image:"http://s.tf1.fr/mmdia/i/96/4/froid-polaire-neige-soleil-temperature-temperatures-glace-11352964sykco_1713.jpg?v=1",
			},
			{id:"07",
			 question:"Quelle marque de voiture est utiliser dans 'retour vers le futur' ?",
			 reponseA:"Renault",
			 reponseB:"Citroën",
			 reponseC:"Toyota",
			 reponseD:"DeLorean",
			 correct:"reponseD",
			 points:2,
			 image:"http://img0.gtsstatic.com/wallpapers/2eb0e21cb2f6227755e413530bb9250c_large.jpeg",
			},
			{id:"08",
			 question:"En quelle année le système d'exploitation 'Windows 10' fut-il mis en service ?",
			 reponseA:"2007",
			 reponseB:"2009",
			 reponseC:"2011",
			 reponseD:"2015",
			 correct:"reponseD",
			 points:2,
			 image:"http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2015/05/blue-wallpaper_windows_10_hd_2880x1800.png",
			},
			{id:"09",
			 question:"Hormis le chien, quel autre animal utilise-t-on pour rechercher des truffes ?",
			 reponseA:"Cochon",
			 reponseB:"Cheval",
			 reponseC:"Hérisson",
			 reponseD:"Lapin",
			 correct:"reponseA",
			 points:2,
			 image:"http://i.f1g.fr/media/ext/orig/www.lefigaro.fr/medias/2013/12/23/PHO662a2b64-6bcb-11e3-96f3-30b04eaac733-805x453.jpg",
			},
			{id:"10",
			 question:"Comment dit-on la couleur jaune en anglais ?",
			 reponseA:"Giallo",
			 reponseB:"Yellow",
			 reponseC:"Green",
			 reponseD:"Amarillo",
			 correct:"reponseB",
			 points:2,
			 image:"http://www.truebluemagazine.com/wp-content/uploads/2014/02/mellowyellow6.jpeg",
			}

		];
		
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;
		
		$scope.valider = function() {
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
			}
			
			$scope.numquestion += 1;
			
			if ($scope.numquestion >= 10)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points <=5)
				{
					$scope.texte = "Pas terrible !";
				}
				else if ($scope.points > 5 && $scope.points <= 10)
				{
					$scope.texte = "Pas mal !";
				}
				else if ($scope.points > 10 && $scope.points < 15)
				{
					$scope.texte = "Bien !";
				}
				else if ($scope.points >= 20)
				{
					$scope.texte = "excellent !";
				}
			}
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
				
			}
			
			$scope.reponse = "";
		};
	}]);