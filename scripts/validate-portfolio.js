import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portfolioPath = path.join(__dirname, '../src/data/portfolio.json');

// Define the schema
const schema = {
  meta: {
    title: 'string',
    description: 'string',
    author: 'string',
    email: 'string',
    phone: 'string',
    logo: 'string',
  },
  hero: {
    name: 'string',
    greeting: 'string',
    emoji: 'string',
    description: 'string',
    profileImage: 'string',
    profileImageAlt: 'string',
    buttons: [
      {
        text: 'string',
        type: 'string',
        action: 'string',
      },
    ],
  },
  services: [
    {
      id: 'string',
      icon: 'string',
      title: 'string',
      description: 'string',
    },
  ],
  education: [
    {
      id: 'string',
      icon: 'string',
      school: 'string',
      degree: 'string',
      startYear: 'number',
      endYear: 'number',
    },
  ],
  about: {
    title: 'string',
    description: 'string',
    stats: [
      {
        id: 'string',
        value: 'string',
        label: 'string',
      },
    ],
  },
  skills: [
    {
      id: 'string',
      name: 'string',
      proficiency: 'number',
    },
  ],
  experience: [
    {
      id: 'string',
      icon: 'string',
      title: 'string',
      company: 'string',
      startDate: 'string',
      endDate: 'string',
    },
  ],
  projects: [
    {
      id: 'string',
      title: 'string',
      image: 'string',
      imageAlt: 'string',
      description: 'string',
      fullDescription: 'string',
      tags: ['string'],
      link: 'string',
      github: 'string',
    },
  ],
  testimonials: [
    {
      id: 'string',
      name: 'string',
      role: 'string',
      avatar: 'string',
      text: 'string',
    },
  ],
  contact: {
    title: 'string',
    description: 'string',
    details: [
      {
        id: 'string',
        icon: 'string',
        label: 'string',
        value: 'string',
        link: 'string',
      },
    ],
  },
  social: [
    {
      id: 'string',
      name: 'string',
      url: 'string',
      icon: 'string',
    },
  ],
};

function validateType(value, expectedType) {
  if (expectedType === 'string') return typeof value === 'string';
  if (expectedType === 'number') return typeof value === 'number';
  if (expectedType === 'boolean') return typeof value === 'boolean';
  if (Array.isArray(expectedType)) {
    return Array.isArray(value);
  }
  return true;
}

function validateObject(obj, schemaObj, path = '') {
  const errors = [];

  for (const key in schemaObj) {
    const currentPath = path ? `${path}.${key}` : key;
    const schemaValue = schemaObj[key];
    const objValue = obj[key];

    if (Array.isArray(schemaValue)) {
      if (!Array.isArray(objValue)) {
        errors.push(`${currentPath}: Expected array, got ${typeof objValue}`);
        continue;
      }

      const itemSchema = schemaValue[0];
      objValue.forEach((item, index) => {
        if (typeof itemSchema === 'object' && !Array.isArray(itemSchema)) {
          const itemErrors = validateObject(item, itemSchema, `${currentPath}[${index}]`);
          errors.push(...itemErrors);
        }
      });
    } else if (typeof schemaValue === 'object' && schemaValue !== null) {
      if (typeof objValue !== 'object' || objValue === null) {
        errors.push(`${currentPath}: Expected object, got ${typeof objValue}`);
        continue;
      }
      const nestedErrors = validateObject(objValue, schemaValue, currentPath);
      errors.push(...nestedErrors);
    } else {
      if (!validateType(objValue, schemaValue)) {
        errors.push(
          `${currentPath}: Expected ${schemaValue}, got ${typeof objValue}`
        );
      }
    }
  }

  return errors;
}

try {
  const data = JSON.parse(fs.readFileSync(portfolioPath, 'utf-8'));
  const errors = validateObject(data, schema);

  if (errors.length === 0) {
    console.log('✓ portfolio.json is valid!');
    process.exit(0);
  } else {
    console.error('✗ portfolio.json validation failed:');
    errors.forEach((error) => console.error(`  - ${error}`));
    process.exit(1);
  }
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error('✗ portfolio.json not found at', portfolioPath);
  } else if (error instanceof SyntaxError) {
    console.error('✗ portfolio.json is not valid JSON:', error.message);
  } else {
    console.error('✗ Error validating portfolio.json:', error.message);
  }
  process.exit(1);
}
