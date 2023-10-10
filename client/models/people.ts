import {IPeople} from 'swapi-ts'
import Ackbar from '../../public/peoples/Ackbar.jpeg'
import Adi_Gallia from '../../public/peoples/Adi Gallia.jpeg'
import Anakin_Skywalker from '../../public/peoples/Anakin Skywalker.jpeg'
import Arvel_Crynyd from '../../public/peoples/Arvel Crynyd.jpeg'
import Ayla_Secura from '../../public/peoples/Ayla Secura.jpeg'
import Bail_Prestor_Organa from '../../public/peoples/Bail Prestor Organa.jpeg'
import Barriss_Offee from '../../public/peoples/Barriss Offee.jpeg'
import Ben_Quadinaros from '../../public/peoples/Ben Quadinaros.jpeg'
import Beru_Whitesun_lars from '../../public/peoples/Beru Whitesun lars.jpeg'
import Bib_Fortuna from '../../public/peoples/Bib Fortuna.jpeg'
import Biggs_Darklighter from '../../public/peoples/Biggs Darklighter.jpeg'
import Boba_Fett from '../../public/peoples/Boba Fett.jpeg'
import Bossk from '../../public/peoples/Bossk.jpeg'
import C_3PO from '../../public/peoples/C-3PO.jpeg'
import Chewbacca from '../../public/peoples/Chewbacca.jpeg'
import Cliegg_Lars from '../../public/peoples/Cliegg Lars.jpeg'
import Corde from '../../public/peoples/Cordé.jpeg'
import Darth_Maul from '../../public/peoples/Darth Maul.jpeg'
import Darth_Vader from '../../public/peoples/Darth Vader.jpeg'
import Dexter_Jettster from '../../public/peoples/Dexter Jettster.jpeg'
import Dooku from '../../public/peoples/Dooku.jpeg'
import Dorme from '../../public/peoples/Dormé.jpeg'
import Dud_Bolt from '../../public/peoples/Dud Bolt.jpeg'
import Eeth_Koth from '../../public/peoples/Eeth Koth.jpeg'
import Finis_Valorum from '../../public/peoples/Finis Valorum.jpeg'
import Gasgano from '../../public/peoples/Gasgano.jpeg'
import Greedo from '../../public/peoples/Greedo.jpeg'
import Gregar_Typho from '../../public/peoples/Gregar Typho.jpeg'
import Grievous from '../../public/peoples/Grievous.jpeg'
import Han_Solo from '../../public/peoples/Han Solo.jpeg'
import IG_88 from '../../public/peoples/IG-88.jpeg'
import Jabba_Desilijic_Tiure from '../../public/peoples/Jabba Desilijic Tiure.jpeg'
import Jango_Fett from '../../public/peoples/Jango Fett.jpeg'
import Jar_Jar_Binks from '../../public/peoples/Jar Jar Binks.jpeg'
import Jek_Tono_Porkins from '../../public/peoples/Jek Tono Porkins.jpeg'
import Jocasta_Nu from '../../public/peoples/Jocasta Nu.jpeg'
import Ki_Adi_Mundi from '../../public/peoples/Ki-Adi-Mundi.jpeg'
import Kit_Fisto from '../../public/peoples/Kit Fisto.jpeg'
import Lama_Su from '../../public/peoples/Lama Su.jpeg'
import Lando_Calrissian from '../../public/peoples/Lando Calrissian.jpeg'
import Leia_Organa from '../../public/peoples/Leia Organa.jpeg'
import Lobot from '../../public/peoples/Lobot.jpeg'
import Luke_Skywalker from '../../public/peoples/Luke Skywalker.jpeg'
import Luminara_Unduli from '../../public/peoples/Luminara Unduli.jpeg'
import Mace_Windu from '../../public/peoples/Mace Windu.jpeg'
import Mas_Amedda from '../../public/peoples/Mas Amedda.jpeg'
import Mon_Mothma from '../../public/peoples/Mon Mothma.jpeg'
import Nien_Nunb from '../../public/peoples/Nien Nunb.jpeg'
import Nute_Gunray from '../../public/peoples/Nute Gunray.jpeg'
import Obi_Wan_Kenobi from '../../public/peoples/Obi-Wan Kenobi.jpeg'
import Owen_Lars from '../../public/peoples/Owen Lars.jpeg'
import Padme_Amidala from '../../public/peoples/Padmé Amidala.jpeg'
import Palpatine from '../../public/peoples/Palpatine.jpeg'
import Plo_Koon from '../../public/peoples/Plo Koon.jpeg'
import Poggle_the_Lesser from '../../public/peoples/Poggle the Lesser.jpeg'
import Quarsh_Panaka from '../../public/peoples/Quarsh Panaka.jpeg'
import Qui_Gon_Jinn from '../../public/peoples/Qui-Gon Jinn.jpeg'
import R2_D2 from '../../public/peoples/R2-D2.jpeg'
import R4_P17 from '../../public/peoples/R4-P17.jpeg'
import R5_D4 from '../../public/peoples/R5-D4.jpeg'
import Ratts_Tyerel from '../../public/peoples/Ratts Tyerel.jpeg'
import Raymus_Antilles from '../../public/peoples/Raymus Antilles.jpeg'
import Ric_Olie from '../../public/peoples/Ric Olié.jpeg'
import Roos_Tarpals from '../../public/peoples/Roos Tarpals.jpeg'
import Rugor_Nass from '../../public/peoples/Rugor Nass.jpeg'
import Saesee_Tiin from '../../public/peoples/Saesee Tiin.jpeg'
import San_Hill from '../../public/peoples/San Hill.jpeg'
import Sebulba from '../../public/peoples/Sebulba.jpeg'
import Shaak_Ti from '../../public/peoples/Shaak Ti.jpeg'
import Shmi_Skywalker from '../../public/peoples/Shmi Skywalker.jpeg'
import Sly_Moore from '../../public/peoples/Sly Moore.jpeg'
import Tarfful from '../../public/peoples/Tarfful.jpeg'
import Taun_We from '../../public/peoples/Taun We.jpeg'
import Tion_Medon from '../../public/peoples/Tion Medon.jpeg'
import Wat_Tambor from '../../public/peoples/Wat Tambor.jpeg'
import Watto from '../../public/peoples/Watto.jpeg'
import Wedge_Antilles from '../../public/peoples/Wedge Antilles.jpeg'
import Wicket_Systri_Warrick from '../../public/peoples/Wicket Systri Warrick.jpeg'
import Wilhuff_Tarkin from '../../public/peoples/Wilhuff Tarkin.jpeg'
import Yarael_Poof from '../../public/peoples/Yarael Poof.jpeg'
import Yoda from '../../public/peoples/Yoda.jpeg'
import Zam_Wesell from '../../public/peoples/Zam Wesell.jpeg'

interface PeopleInterface {
  title: string
  edit?: boolean
}

interface PeopleModelInterface extends Record<keyof IPeople, PeopleInterface> {}

export const peopleModel: PeopleModelInterface = {
  name: {
    title: 'Name',
    edit: true,
  },
  birth_year: {
    title: 'Birth year',
  },
  eye_color: {
    title: 'Eye color',
  },
  gender: {
    title: 'Gender',
  },
  hair_color: {
    title: 'Hair color',
  },
  height: {
    title: 'Height',
  },
  mass: {
    title: 'Mass',
  },
  skin_color: {
    title: 'Skin color',
  },
  homeworld: {
    title: 'Homeworld',
  },
  films: {
    title: 'Films',
  },
  species: {
    title: 'Species',
  },
  starships: {
    title: 'Starships',
  },
  vehicles: {
    title: 'Vehicles',
  },
  url: {
    title: null,
  },
  created: {
    title: 'Created',
  },
  edited: {
    title: 'Edited',
  },
}

export const peoleImg = {
  Ackbar: {img: Ackbar},
  'Adi Gallia': {img: Adi_Gallia},
  'Anakin Skywalker': {img: Anakin_Skywalker},
  'Arvel Crynyd': {img: Arvel_Crynyd},
  'Ayla Secura': {img: Ayla_Secura},
  'Bail Prestor Organa': {img: Bail_Prestor_Organa},
  'Barriss Offee': {img: Barriss_Offee},
  'Ben Quadinaros': {img: Ben_Quadinaros},
  'Beru Whitesun lars': {img: Beru_Whitesun_lars},
  'Bib Fortuna': {img: Bib_Fortuna},
  'Biggs Darklighter': {img: Biggs_Darklighter},
  'Boba Fett': {img: Boba_Fett},
  Bossk: {img: Bossk},
  'C-3PO': {img: C_3PO},
  Chewbacca: {img: Chewbacca},
  'Cliegg Lars': {img: Cliegg_Lars},
  Cordé: {img: Corde},
  'Darth Maul': {img: Darth_Maul},
  'Darth Vader': {img: Darth_Vader},
  'Dexter Jettster': {img: Dexter_Jettster},
  Dooku: {img: Dooku},
  Dormé: {img: Dorme},
  'Dud Bolt': {img: Dud_Bolt},
  'Eeth Koth': {img: Eeth_Koth},
  'Finis Valorum': {img: Finis_Valorum},
  Gasgano: {img: Gasgano},
  Greedo: {img: Greedo},
  'Gregar Typho': {img: Gregar_Typho},
  Grievous: {img: Grievous},
  'Han Solo': {img: Han_Solo},
  'IG-88': {img: IG_88},
  'Jabba Desilijic Tiure': {img: Jabba_Desilijic_Tiure},
  'Jango Fett': {img: Jango_Fett},
  'Jar Jar Binks': {img: Jar_Jar_Binks},
  'Jek Tono Porkins': {img: Jek_Tono_Porkins},
  'Jocasta Nu': {img: Jocasta_Nu},
  'Ki-Adi-Mundi': {img: Ki_Adi_Mundi},
  'Kit Fisto': {img: Kit_Fisto},
  'Lama Su': {img: Lama_Su},
  'Lando Calrissian': {img: Lando_Calrissian},
  'Leia Organa': {img: Leia_Organa},
  Lobot: {img: Lobot},
  'Luke Skywalker': {img: Luke_Skywalker},
  'Luminara Unduli': {img: Luminara_Unduli},
  'Mace Windu': {img: Mace_Windu},
  'Mas Amedda': {img: Mas_Amedda},
  'Mon Mothma': {img: Mon_Mothma},
  'Nien Nunb': {img: Nien_Nunb},
  'Nute Gunray': {img: Nute_Gunray},
  'Obi-Wan Kenobi': {img: Obi_Wan_Kenobi},
  'Owen Lars': {img: Owen_Lars},
  'Padmé Amidala': {img: Padme_Amidala},
  Palpatine: {img: Palpatine},
  'Plo Koon': {img: Plo_Koon},
  'Poggle the Lesser': {img: Poggle_the_Lesser},
  'Quarsh Panaka': {img: Quarsh_Panaka},
  'Qui-Gon Jinn': {img: Qui_Gon_Jinn},
  'R2-D2': {img: R2_D2},
  'R4-P17': {img: R4_P17},
  'R5-D4': {img: R5_D4},
  'Ratts Tyerel': {img: Ratts_Tyerel},
  'Raymus Antilles': {img: Raymus_Antilles},
  'Ric Olié': {img: Ric_Olie},
  'Roos Tarpals': {img: Roos_Tarpals},
  'Rugor Nass': {img: Rugor_Nass},
  'Saesee Tiin': {img: Saesee_Tiin},
  'San Hill': {img: San_Hill},
  Sebulba: {img: Sebulba},
  'Shaak Ti': {img: Shaak_Ti},
  'Shmi Skywalker': {img: Shmi_Skywalker},
  'Sly Moore': {img: Sly_Moore},
  Tarfful: {img: Tarfful},
  'Taun We': {img: Taun_We},
  'Tion Medon': {img: Tion_Medon},
  'Wat Tambor': {img: Wat_Tambor},
  Watto: {img: Watto},
  'Wedge Antilles': {img: Wedge_Antilles},
  'Wicket Systri Warrick': {img: Wicket_Systri_Warrick},
  'Wilhuff Tarkin': {img: Wilhuff_Tarkin},
  'Yarael Poof': {img: Yarael_Poof},
  Yoda: {img: Yoda},
  'Zam Wesell': {img: Zam_Wesell},
}
